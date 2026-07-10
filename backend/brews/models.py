from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Brew(models.Model):

    class BrewMethod(models.TextChoices):
        POUR_OVER = "Pour Over", "Pour Over"
        FRENCH_PRESS = "French Press", "French Press"
        ESPRESSO = "Espresso", "Espresso"
        AEROPRESS = "Aeropress", "Aeropress"

    beans = models.CharField(max_length=100)
    method = models.CharField(
        max_length=30,
        choices=BrewMethod.choices
    )
    coffee_grams = models.PositiveIntegerField()
    water_grams = models.PositiveIntegerField()
    rating = models.PositiveSmallIntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )
    tasting_notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.beans