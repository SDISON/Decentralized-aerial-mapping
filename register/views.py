from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.http import Http404
from . import forms

def index(request):
	form = forms.registration()
	if request.method=='POST':
		form = forms.registration(request.POST,request.FILES)
		if form.is_valid():
			account = form.cleaned_data['account']
			company_name = form.cleaned_data['company_name']
			return render(request,'register/indexloader.html',{'account':account, 'company':company_name})
	return render(request,'register/index.html',{'form':form,'error':0})
