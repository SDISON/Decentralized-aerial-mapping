from django import forms
from . import views
from django.core.validators import RegexValidator

class registration(forms.Form):
	account = forms.CharField(validators=[RegexValidator(regex=r'^\w+$',message='Enter valid account address',code='invalid_address')],max_length=100,widget= forms.TextInput(attrs={'placeholder':'Enter drone account address'}))
	company_name = forms.CharField(validators=[RegexValidator(regex=r'^\w+$',message='Enter valid company name',code='invalid_name')],max_length=100,widget= forms.TextInput(attrs={'placeholder':'Enter company name'}))
