from rest_framework import serializers
from .models import Region, Category, POI, Legislation


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class POISerializer(serializers.ModelSerializer):
    region = serializers.SlugRelatedField(slug_field='slug', queryset=Region.objects.all())
    category = serializers.SlugRelatedField(slug_field='slug', queryset=Category.objects.all())

    class Meta:
        model = POI
        fields = '__all__'


class LegislationSerializer(serializers.ModelSerializer):
    region = serializers.SlugRelatedField(slug_field='slug', queryset=Region.objects.all())

    class Meta:
        model = Legislation
        fields = '__all__'