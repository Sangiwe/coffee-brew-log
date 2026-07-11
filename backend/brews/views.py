from rest_framework import viewsets
from .models import Brew
from .serializers import BrewSerializer


class BrewViewSet(viewsets.ModelViewSet):
    queryset = Brew.objects.all().order_by("-created_at")
    serializer_class = BrewSerializer
    filterset_fields = ['method']