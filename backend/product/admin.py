from django.contrib import admin
from .models import Product

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ['productID','productName','cateGory','price','stockQuantity','manufacturer','supplier']

admin.site.register(Product,ProductAdmin)