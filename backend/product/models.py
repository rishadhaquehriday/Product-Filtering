from django.db import models

# Create your models here.

class Product(models.Model):
    productID = models.AutoField(primary_key=True)
    productName = models.CharField(max_length=100)
    cateGory = models.CharField(max_length=100)
    price = models.CharField(max_length=30)
    stockQuantity = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    supplier = models.CharField(max_length=100)
    
    
    
