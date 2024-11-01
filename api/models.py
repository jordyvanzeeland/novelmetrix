from django.db import models

# Create your models here.
class Books(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=0, null=False, blank=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    author = models.CharField(max_length=255, null=False, blank=False)
    genre = models.CharField(max_length=100, null=False, blank=False)
    current = models.IntegerField(default=0, null=False, blank=False)
    en = models.IntegerField(default=0, null=False, blank=False)
    readed = models.IntegerField(default=0, null=False, blank=False)
    readedOn = models.CharField(max_length=100, null=True, blank=True)
    rating = models.CharField(max_length=100, null=True, blank=True)
    challengeid = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name
    
class Challenges(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=0, null=False, blank=False)
    name = models.CharField(max_length=100, null=False, blank=False)
    year = models.CharField(max_length=100, null=False, blank=False)
    nrofbooks = models.IntegerField(default=0, null=False, blank=False)

    def __str__(self):
        return self.name