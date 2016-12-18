from rest_framework import serializers

from contactos.models import Contacto


class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = ('id',
                  'nombre',
                  'primer_apellido',
                  'segundo_apellido',
                  'fecha_nacimiento',
                  'telefono_fijo',
                  'telefono_movil',
                  'email',
                  'puesto',
                  'genero',
                  'direccion',
                  'imagen'
                  )


