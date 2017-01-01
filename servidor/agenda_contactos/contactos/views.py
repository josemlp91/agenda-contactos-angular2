# Create your views here.
import os

from django.core.exceptions import ObjectDoesNotExist
from django.core.files.base import ContentFile

from rest_framework import generics
from rest_framework import permissions
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView

from agenda_contactos import settings
from contactos.models import Contacto
from contactos.serializer import ContactoSerializer


class ContactosList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)
    serializer_class = ContactoSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Contacto.objects.filter(borrado=False, propietario=user)
        return queryset


class ContactosCreate(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)
    queryset = Contacto.objects.filter(borrado=False)
    serializer_class = ContactoSerializer

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(propietario=user)


class ContactosGet(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)
    serializer_class = ContactoSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Contacto.objects.filter(borrado=False, propietario=user)
        return queryset


class ContactosEdit(generics.UpdateAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)
    serializer_class = ContactoSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Contacto.objects.filter(borrado=False, propietario=user)
        return queryset


class ContactosDelete(generics.DestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)
    serializer_class = ContactoSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Contacto.objects.filter(borrado=False, propietario=user)
        return queryset

    def destroy(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.borrado = True
        obj.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ImagenContactoUpload(APIView):
    parser_classes = (FileUploadParser,)

    def put(self, request, id, format=None):
        file_obj = request.data['file']
        folder = request.path.replace("/", "_")
        full_filename = os.path.join(settings.MEDIA_ROOT, id)
        fout = open(full_filename, 'wb+')
        file_content = ContentFile(file_obj.read())

        try:
            contacto = Contacto.objects.get(id=id)
        except ObjectDoesNotExist:
            return Response(status=204)


        contacto.imagen = full_filename
        contacto.save()

        for chunk in file_content.chunks():
            fout.write(chunk)
        fout.close()

        return Response(status=204)
