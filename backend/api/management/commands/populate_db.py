from django.core.management.base import BaseCommand
from api.models import Region, Category, POI


class Command(BaseCommand):
    help = 'Populate database with sample data'

    def handle(self, *args, **options):
        # Create regions
        regions_data = [
            {
                'slug': 'norte',
                'name': 'Norte',
                'subdomain': 'www',
                'description': 'Hub general con acceso a todas las regiones, rutas destacadas y recursos legales del norte de España.',
                'population': 6000000,
                'dog_owners': 1900000,
                'image': '/dogs-illustration.svg',
            },
            {
                'slug': 'galicia',
                'name': 'Galicia',
                'subdomain': 'galicia',
                'description': 'Acantilados de la Costa da Morte, bosques mágicos y casas rurales con pradera vallada.',
                'population': 2695000,
                'dog_owners': 720000,
                'image': 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
            },
            {
                'slug': 'asturias',
                'name': 'Asturias',
                'subdomain': 'asturias',
                'description': 'Montañas verdes, ríos con agua todo el año y rutas pet friendly en Picos de Europa.',
                'population': 1018000,
                'dog_owners': 310000,
                'image': 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
            },
            {
                'slug': 'cantabria',
                'name': 'Cantabria',
                'subdomain': 'cantabria',
                'description': 'Playas pet friendly, senderos costeros y naturaleza infinita.',
                'population': 589000,
                'dog_owners': 180000,
                'image': 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
            },
            {
                'slug': 'euskadi',
                'name': 'Euskadi',
                'subdomain': 'euskadi',
                'description': 'Rutas urbanas + verdes y la mejor gastronomía dog friendly del norte.',
                'population': 2228000,
                'dog_owners': 610000,
                'image': 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
            },
            {
                'slug': 'navarra',
                'name': 'Navarra',
                'subdomain': 'navarra',
                'description': 'Bosques milenarios, bardenas y la mejor red de veterinarios 24h.',
                'population': 661000,
                'dog_owners': 190000,
                'image': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            },
            {
                'slug': 'iparralde',
                'name': 'Iparralde',
                'subdomain': 'iparralde',
                'description': 'Costa vasca francesa, acantilados verdes y normativa europea.',
                'population': 315000,
                'dog_owners': 86000,
                'image': 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c',
            },
        ]

        for region_data in regions_data:
            Region.objects.get_or_create(
                slug=region_data['slug'],
                defaults=region_data
            )

        # Create categories
        categories_data = [
            {
                'slug': 'alojamiento',
                'label': 'Alojamientos vallados',
                'description': 'Casas rurales, hoteles, campings y apartamentos que admiten perros.'
            },
            {
                'slug': 'transporte',
                'label': 'Transporte pet friendly',
                'description': 'Vuelos, trenes, autobuses, cercanías y alquiler de coches con políticas claras.'
            },
            {
                'slug': 'veterinarios',
                'label': 'Veterinarios 24h',
                'description': 'Directorio de clínicas y hospitales con urgencias.'
            },
            {
                'slug': 'tiendas',
                'label': 'Tiendas y alimentación',
                'description': 'Tiendas especializadas y boutiques dog friendly.'
            },
            {
                'slug': 'ocio-naturaleza',
                'label': 'Ocio y naturaleza',
                'description': 'Rutas con agua, playas caninas y parques.'
            },
            {
                'slug': 'hosteleria',
                'label': 'Hostelería',
                'description': 'Bares, restaurantes y cafés seguros para mascotas.'
            },
            {
                'slug': 'servicios',
                'label': 'Servicios y cuidadores',
                'description': 'Guarderías, cuidadores, adiestradores y marketplace.'
            },
            {
                'slug': 'comunidad',
                'label': 'Comunidad y ayuda social',
                'description': 'Foro, eventos, adopciones y perros desaparecidos.'
            },
        ]

        for category_data in categories_data:
            Category.objects.get_or_create(
                slug=category_data['slug'],
                defaults=category_data
            )

        # Get regions and categories for POIs
        euskadi = Region.objects.get(slug='euskadi')
        asturias = Region.objects.get(slug='asturias')
        ocio_naturaleza = Category.objects.get(slug='ocio-naturaleza')

        # Create sample POIs
        pois_data = [
            {
                'region': euskadi,
                'category': ocio_naturaleza,
                'type': 'playa',
                'name': 'Playa de La Concha',
                'slug': 'playa-la-concha',
                'description': 'Playa urbana icónica en San Sebastián, pet-friendly en temporada baja.',
                'location': {
                    'latitude': 43.3183,
                    'longitude': -1.9812,
                    'town': 'San Sebastián'
                },
                'pet_rules': {
                    'allowed': True,
                    'notes': 'Permitidos fuera de temporada alta. Bozal obligatorio para PPP.',
                    'maxPets': 2,
                    'typesAllowed': ['perro'],
                    'restrictions': ['correa obligatoria', 'no en zona de baño'],
                },
                'contact': {
                    'website': 'https://www.sansebastianturismo.com'
                },
                'images': ['/images/playa-concha.jpg'],
                'verified': True,
                'featured': True,
                'tags': ['playa', 'urbana', 'temporada-baja'],
                'stats': {
                    'reviews': 45,
                    'rating': 4.2,
                    'favorites': 120
                },
                'season_access': False,
                'ppp_allowed': False,
            },
            {
                'region': asturias,
                'category': ocio_naturaleza,
                'type': 'ruta',
                'name': 'Ruta del Flysch',
                'slug': 'ruta-flysch',
                'description': 'Ruta geológica por acantilados con vistas espectaculares.',
                'location': {
                    'latitude': 43.4,
                    'longitude': -2.5,
                    'town': 'Zumaia'
                },
                'pet_rules': {
                    'allowed': True,
                    'notes': 'Perros con correa. Agua disponible en algunos tramos.',
                    'typesAllowed': ['perro'],
                },
                'verified': True,
                'featured': True,
                'tags': ['ruta', 'geologica', 'acantilados'],
                'length': 5.0,
                'difficulty': 'medio',
                'duration': '3 horas',
                'water_access': True,
                'suitable_for': ['senderismo'],
            },
        ]

        for poi_data in pois_data:
            POI.objects.get_or_create(
                slug=poi_data['slug'],
                defaults=poi_data
            )

        self.stdout.write(self.style.SUCCESS('Database populated successfully!'))