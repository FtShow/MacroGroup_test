from django.db import models

class Workplace(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)
    ip_address = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name
