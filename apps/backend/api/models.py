from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User


class Region(models.Model):
    slug = models.SlugField(unique=True, max_length=50)
    name = models.CharField(max_length=100)
    subdomain = models.CharField(max_length=50)
    description = models.TextField()
    population = models.IntegerField()
    dog_owners = models.IntegerField()
    image = models.URLField()

    def __str__(self):
        return self.name


class Category(models.Model):
    slug = models.SlugField(unique=True, max_length=50)
    label = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.label


class POI(models.Model):
    POI_TYPES = [
        ('alojamiento', 'Alojamiento'),
        ('playa', 'Playa'),
        ('veterinaria', 'Veterinaria'),
        ('ruta', 'Ruta'),
        ('transporte', 'Transporte'),
        ('espacio-natural', 'Espacio Natural'),
        ('hosteleria', 'Hostelería'),
        ('tienda', 'Tienda'),
        ('servicio', 'Servicio'),
        ('comunidad', 'Comunidad'),
    ]

    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    type = models.CharField(max_length=20, choices=POI_TYPES)
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=200)
    description = models.TextField()
    location = models.JSONField()  # {latitude, longitude, address, town, postalCode}
    pet_rules = models.JSONField()  # {allowed, notes, maxPets, weightLimit, typesAllowed, restrictions, extraFee}
    contact = models.JSONField(null=True, blank=True)  # {phone, website, email}
    images = models.JSONField(null=True, blank=True)  # list of URLs
    verified = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    tags = models.JSONField(null=True, blank=True)  # list of strings
    stats = models.JSONField(null=True, blank=True)  # {reviews, rating, favorites}

    # Specific fields for subtypes
    season_access = models.BooleanField(null=True, blank=True)  # for beaches
    ppp_allowed = models.BooleanField(null=True, blank=True)  # for beaches
    special_regulations = models.JSONField(null=True, blank=True)  # for beaches
    length = models.FloatField(null=True, blank=True)  # for routes
    difficulty = models.CharField(max_length=20, null=True, blank=True)  # for routes
    duration = models.CharField(max_length=50, null=True, blank=True)  # for routes
    water_access = models.BooleanField(null=True, blank=True)  # for routes
    suitable_for = models.JSONField(null=True, blank=True)  # for routes
    transport_policies = models.JSONField(null=True, blank=True)  # for transport
    regulations = models.JSONField(null=True, blank=True)  # for natural spaces
    activities = models.JSONField(null=True, blank=True)  # for natural spaces

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Legislation(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=200)
    content = models.TextField()
    category = models.CharField(max_length=100)  # e.g., 'animales', 'transporte'
    effective_date = models.DateField()
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title