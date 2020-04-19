from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.http import Http404

def index(request):
	return render(request,'map/index.html')
