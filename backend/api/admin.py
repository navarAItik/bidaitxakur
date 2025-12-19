from django.contrib import admin
from .models import Region, Category, POI, Legislation


@admin.register(Region)
class RegionAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'subdomain', 'population', 'dog_owners')
    search_fields = ('name', 'slug')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('label', 'slug', 'description')
    search_fields = ('label', 'slug')


@admin.register(POI)
class POIAdmin(admin.ModelAdmin):
    list_display = ('name', 'region', 'category', 'type', 'verified', 'featured')
    list_filter = ('region', 'category', 'type', 'verified', 'featured')
    search_fields = ('name', 'slug', 'description')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Legislation)
class LegislationAdmin(admin.ModelAdmin):
    list_display = ('title', 'region', 'category', 'effective_date')
    list_filter = ('region', 'category', 'effective_date')
    search_fields = ('title', 'content')