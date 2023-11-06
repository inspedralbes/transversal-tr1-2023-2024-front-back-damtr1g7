#pedidos por dia xDias, yPedidos json=comandes
#dinero por dia xDias, yDinero json=join productes, comandes, comandaProd
#tiempo finalizar xidComanda, yTIempo--Recta regresion json=comanda
#productos/precio xnumCompras yPrecio json=productes

import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import rcParams
from datetime import date
import sys
import json


avui = date.today();
terminacio=avui ,'.jpeg';
info = sys.argv[1]


def VentaProductes (info2): #comparacio venta productes json=productes 
    df = pd.read_json(info2, lines=True)
    x_values = df['nom']
    y_values = df['numCompra']
    plt.bar(x_values, y_values)
    plt.title('Comparativa productes comprats')
    ax = plt.subplot()                   
    ax.set_xticks(x_values)             
    ax.set_xticklabels(x_values)       
    ax.set_xlabel('Producte')  
    ax.set_ylabel('Quantitat venuda') 
    plt.savefig('VentaProductes'+terminacio)
    plt.close('all')

def VentaPreu (info2): #comparacio venta preu json=productes 
    df = pd.read_json(info2, lines=True)
    x_values = df['numCompra']
    y_values = df['Preu']
    plt.bar(x_values, y_values)
    plt.title('Comparativa productes comprats donat el preu')
    ax = plt.subplot()                   
    ax.set_xticks(x_values)             
    ax.set_xticklabels(x_values)       
    ax.set_xlabel('Unitats venudes')  
    ax.set_ylabel('Cost') 
    plt.savefig('VentaProductes'+terminacio)
    plt.close('all')

def TipusProducte (info2): #comparacio tipus producte json=productes 
    df = pd.read_json(info2, lines=True)
    x_values = df['tipus'].unique()
    y_values = df['tipus'].value_counts().tolist()
    plt.bar(x_values, y_values)
    plt.title('Comparativa productes comprats')
    ax = plt.subplot()                   
    ax.set_xticks(x_values)             
    ax.set_xticklabels(x_values)       
    ax.set_xlabel('Producte')  
    ax.set_ylabel('Quantitat venuda') 
    plt.savefig('VentaProductes'+terminacio)
    plt.close('all')

def EstatCommandas (info2): #comprobacio estats actuals de comandes json=comandes
    df = pd.read_json(info2, lines=True)
    x_values = df['estat'].unique()
    y_values = df['estat'].value_counts().tolist()
    plt.bar(x_values, y_values)
    plt.title('Estat actual de les comandes')
    ax = plt.subplot()                   
    ax.set_xticks(x_values)             
    ax.set_xticklabels(x_values)       
    ax.set_xlabel('Estat actual')  
    ax.set_ylabel('Quantitat')
    plt.savefig('ComparativaEstats'+terminacio)
    plt.close('all')

def cridarFuncions(info2):
    VentaProductes(info2[0])
    VentaPreu(info2[0])
    TipusProducte(info2[0])
    EstatCommandas(info2[1])



info1=json.dumps(info)
info2=json.loads(info1)
print(info2)
cridarFuncions(info2)
