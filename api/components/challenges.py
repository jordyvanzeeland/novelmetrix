from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Challenges as ChallengesModel
from ..serializers import ChallengesSerializer
from ..functions import isAuthorized
from django.http import JsonResponse

class Challenges(APIView):
    def get(self, request, pk=None):
        # Check for authorization
        authorization_token = request.headers.get('Authorization')
        if not authorization_token:
            return JsonResponse({'error': 'No authorization token'}, safe=False)
        if not isAuthorized(authorization_token):
            return JsonResponse({'error': 'Unauthorized'}, safe=False)
        
        if pk:
            try:
                challenge = ChallengesModel.objects.get(pk=pk)
                serializer = ChallengesSerializer(challenge)
                return Response(serializer.data)
            except ChallengesModel.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        
        books = ChallengesModel.objects.all()
        serializer = ChallengesSerializer(books, many=True)
        return Response(serializer.data)

    def post(self, request):
        authorization_token = request.headers.get('Authorization')
        isLoggedIn = isAuthorized(authorization_token)

        if not authorization_token:
            return JsonResponse({'error': 'No authorization token'}, safe=False)

        if not isLoggedIn:
            return JsonResponse({'error': 'Unauthorized'}, safe=False)
        
        serializer = ChallengesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        authorization_token = request.headers.get('Authorization')
        isLoggedIn = isAuthorized(authorization_token)

        if not authorization_token:
            return JsonResponse({'error': 'No authorization token'}, safe=False)

        if not isLoggedIn:
            return JsonResponse({'error': 'Unauthorized'}, safe=False)
        
        try:
            book = ChallengesModel.objects.get(pk=pk)
        except ChallengesModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = ChallengesSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        authorization_token = request.headers.get('Authorization')
        isLoggedIn = isAuthorized(authorization_token)

        if not authorization_token:
            return JsonResponse({'error': 'No authorization token'}, safe=False)

        if not isLoggedIn:
            return JsonResponse({'error': 'Unauthorized'}, safe=False)
        
        try:
            book = ChallengesModel.objects.get(pk=pk)
            book.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ChallengesModel.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)