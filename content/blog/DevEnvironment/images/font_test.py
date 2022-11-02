import numpy as np
import matplotlib
import matplotlib.pyplot as plt
matplotlib.rcParams['text.usetex'] = True

def sigmoid(z):
    """
    Returns the sigmoid of the input z
    """
    return 1 / (1 + np.exp(-z))

X = np.linspace(-10, 10, int(1e3))
Y = sigmoid(X) # Sigmoid function evaluated on X

plt.plot(X,Y,c='blue')
plt.title("Sigmoid Function",fontsize=15)
plt.xlabel(r"$x$", fontsize=15)
plt.ylabel(r'$\sigma(x)$', fontsize=15)
plt.text(2, 0.18, r'$\sigma(x)=\frac{1}{1+e^{-x}}$', fontsize=22,
         bbox=dict(boxstyle="round", ec=(0.0, 0.0, 0.0), fc=(1., 1, 1)))
plt.grid()
plt.show()

