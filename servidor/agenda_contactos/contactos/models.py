from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Contacto(models.Model):
    nombre = models.CharField(null=False, blank=False, max_length=255)
    primer_apellido = models.CharField(null=False, blank=True, max_length=255)
    segundo_apellido = models.CharField(null=False, blank=True, max_length=255)
    fecha_nacimiento = models.DateField(null=False, blank=True)
    telefono_fijo = models.CharField(null=False, blank=True, max_length=255)
    telefono_movil = models.CharField(null=False, blank=True, max_length=255)

    propietario = models.ForeignKey(User, null=True, blank=True)
    borrado = models.BooleanField(default=False)
