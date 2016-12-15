# Create your views here.
from rest_framework import generics

from contactos.models import Contacto
from contactos.serializer import ContactoSerializer


class ContactosList(generics.ListAPIView):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer

class ContactosCreate(generics.CreateAPIView):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer

class ContactosGet(generics.RetrieveAPIView):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer

