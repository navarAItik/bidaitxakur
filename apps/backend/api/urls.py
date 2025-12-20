from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HealthView, RegionViewSet, CategoryViewSet, POIViewSet, LegislationViewSet

router = DefaultRouter()
router.register(r'regions', RegionViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'pois', POIViewSet)
router.register(r'legislations', LegislationViewSet)

urlpatterns = [
    path('health/', HealthView.as_view(), name='health'),
    path('', include(router.urls)),
]
