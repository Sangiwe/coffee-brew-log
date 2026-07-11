from rest_framework.routers import DefaultRouter
from .views import BrewViewSet

router = DefaultRouter()
router.register(r"brews", BrewViewSet)

urlpatterns = router.urls