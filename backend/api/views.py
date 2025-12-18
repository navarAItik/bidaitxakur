from django.http import JsonResponse
from django.views import View
from django.utils import timezone


class HealthView(View):
    def get(self, request):
        return JsonResponse(
            {
                'status': 'ok',
                'timestamp': timezone.now(),
                'message': 'Backend Django vivo y coleando',
            }
        )
