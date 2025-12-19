from django.http import JsonResponse
from django.views import View
from django.utils import timezone
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Region, Category, POI, Legislation
from .serializers import RegionSerializer, CategorySerializer, POISerializer, LegislationSerializer


class HealthView(View):
    def get(self, request):
        return JsonResponse(
            {
                'status': 'ok',
                'timestamp': timezone.now(),
                'message': 'Backend Django vivo y coleando',
            }
        )


class RegionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class POIViewSet(viewsets.ModelViewSet):
    queryset = POI.objects.all()
    serializer_class = POISerializer

    def get_queryset(self):
        queryset = POI.objects.all()
        region = self.request.query_params.get('region', None)
        category = self.request.query_params.get('category', None)
        poi_type = self.request.query_params.get('type', None)

        if region:
            queryset = queryset.filter(region__slug=region)
        if category:
            queryset = queryset.filter(category__slug=category)
        if poi_type:
            queryset = queryset.filter(type=poi_type)

        return queryset


class LegislationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Legislation.objects.all()
    serializer_class = LegislationSerializer
