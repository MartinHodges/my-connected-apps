# My Connected App
The aim of this project is to provide a test web
application using Next.js that can be used within a
Kubernetes cluster.

It was created to experiment with using private APIs
within a Kubernetes cluster along with the 
[my-connected-api](https://github.com/MartinHodges/my-connected-apis)
Spring Boot application.

You can find a more detailed explanation of the project in my associated [Medium article](https://medium.com/@martin.hodges/how-to-access-your-apis-from-next-js-within-kubernetes-86677770f941).

You can run it locally from within the project folder with:
```
npm start dev
```

You can also create a docker image and deploy it to a
Kubernetes cluster.
```
docker build -t my-connected-app .
```
If you are using a Kind cluster, you do not need to upload
it to a Docker repository but can load it directly:
```
kind load docker-image my-connected-app
```

You will find details of how to create your Kind cluster in 
the [my-connected-api](https://github.com/MartinHodges/my-connected-apis) repository.

You can now deploy the application within Kubernetes using:
```
kubectl apply -f k8s/deployment.yml
```

You should now be able to access the web application at
`http:/localhost:30000`.
