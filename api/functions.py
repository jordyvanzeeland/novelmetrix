from django.contrib.auth import get_user_model
from django.http import JsonResponse
import jwt

def isAuthorized(authtoken):
    if(authtoken):
        token = authtoken.split(' ')[1]

        User = get_user_model()
        payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        user = User.objects.get(id=payload['id'])

        if(user):
            return True;
        else:
            return False;
    else:
        return JsonResponse({'error': 'Unauthorized'}, safe=False)