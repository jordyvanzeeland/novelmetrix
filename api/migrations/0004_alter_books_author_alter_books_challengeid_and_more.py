# Generated by Django 4.2.16 on 2024-11-01 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_books_challengeid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='author',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='books',
            name='challengeid',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='books',
            name='genre',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='books',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='books',
            name='rating',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='books',
            name='readedOn',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
