from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductSerializers

from .models import Product

# Create your views here.
class ProductView(APIView):
    
    def get(self,request,pk=None,cateGory=None):
        if cateGory:
            data = Product.objects.filter(cateGory = cateGory)
            serializers = ProductSerializers(data,many=True)
            return Response(serializers.data)
        data = Product.objects.all()
        serializers = ProductSerializers(data,many=True)
        return Response(serializers.data)
