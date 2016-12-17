# Create your views here.
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response

from contactos.models import Contacto
from contactos.serializer import ContactoSerializer


class ContactosList(generics.ListAPIView):
    queryset = Contacto.objects.filter(borrado=False)
    serializer_class = ContactoSerializer


class ContactosCreate(generics.CreateAPIView):  
    queryset = Contacto.objects.filter(borrado=False)
    serializer_class = ContactoSerializer


class ContactosGet(generics.RetrieveAPIView):
    queryset = Contacto.objects.filter(borrado=False)
    serializer_class = ContactoSerializer


class ContactosEdit(generics.UpdateAPIView):
    queryset = Contacto.objects.filter(borrado=False)
    serializer_class = ContactoSerializer


class ContactosDelete(generics.DestroyAPIView):
    queryset = Contacto.objects.filter(borrado=False)
    serializer_class = ContactoSerializer

    def destroy(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.borrado = True
        obj.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
