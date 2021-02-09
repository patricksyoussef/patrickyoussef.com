import numpy as np
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt


class LogisticRegression():

    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))

    def prep_data(self, X):
        temp = X - np.min(X, axis=0)
        X = temp / np.max(temp, axis=0)

        return X

    def add_dimension(self, X):
        X_new = np.hstack((X, np.ones((X.shape[0], 1))))

        return X_new

    def train(self, X_train, y_train, learning_rate, iterations):

        # Saving the learning rate and iteration count to the model instance
        self.learning_rate = learning_rate
        self.iterations = iterations

        # Normalizing the data and appending a 1 for the bias
        X_train = self.prep_data(X_train)
        X_train = self.add_dimension(X_train)

        # Getting dimensions of the input X and starting weights out at small
        # random numbers
        N, D = X_train.shape
        self.weights = np.random.random((D, 1)) * 0.001

        # Training started
        print("Training Started")

        # Train Iterations
        for i in range(self.iterations):

            # Compute the gradient
            A = self.sigmoid(np.dot(self.weights.T, X_train.T))
            grad = (1/N) * np.dot(X_train.T, (A - y_train).T)

            # Update weights using gradient descent
            self.weights = self.weights - self.learning_rate * grad

            # Print Iteration Updates
            if (i+1) % 1000 == 0:
                print("Training Iteration: {}".format(i+1))

    def predict(self, X_test):

        # Prep new data just as training data was
        X_test = self.prep_data(X_test)
        X_test = self.add_dimension(X_test)

        # Compute the forward propagation and round to get {0,1}
        # If the probability if below 0.5, y_est = 0
        # If the probability is above 0.5, y_est = 1
        # Rounding works well to do this!
        A = self.sigmoid(np.dot(self.weights.T, X_test.T))
        y_est = np.round(A)

        return y_est


# Import Data
print("Importing CSV")
data = np.loadtxt(open("diabetes.csv", "rb"), delimiter=",", skiprows=1)

# Split Data Into X and y
X = np.delete(data, -1, axis=1)
y = data[:, -1]

# Test Train Split (30% test) using SkLearn
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30)

# Create an instance of our logistic regression class
MyModel = LogisticRegression()
# Train the model on the training set using a learning rate of 0.1
# and 5000 iterations
MyModel.train(X_train, y_train, 0.1, 5000)
# Get predictions for y_test
y_test_est = MyModel.predict(X_test)

# (Count of correct predictions) / (Total number of test samples)
test_accuracy = np.sum(y_test == y_test_est) / y_test.size
print("Accuracy on test: {}".format(test_accuracy))
