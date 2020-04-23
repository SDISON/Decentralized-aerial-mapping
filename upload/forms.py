from django import forms
from django.core.validators import RegexValidator

class data_collection(forms.Form):
	#account= forms.CharField(validators=[RegexValidator(regex=r'^0x[a-fA-F0-9]{40}$',message='Enter valid account address',code='invalid_account')],max_length=100,widget= forms.TextInput(attrs={'placeholder':'Enter account address'}))
	image = forms.ImageField()
