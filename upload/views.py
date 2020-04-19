from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.http import Http404
from . import forms

def index(request):
	form = forms.data_collection()
	if request.method=='POST':
		form = forms.data_collection(request.POST,request.FILES)
		if form.is_valid():
			account = form.cleaned_data['account']
			f = request.FILES['image']
			handle_uploaded_file(f)
			address = "media/"+f.name
			return render(request,'upload/indexloader.html',{'account':account, 'id':(f.name).split('.')[0], 'file':address})
	return render(request,'upload/index.html',{'form':form,'error':0})

def handle_uploaded_file(f):
	with open('media/'+f.name, 'wb+') as destination:
		for chunk in f.chunks():
			destination.write(chunk)

