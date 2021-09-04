# Docker-Reverse-Proxy

## Objective
* Build 2 app running in diferente containers in same machine and redirect diferents subdomains to each container.

### Structure
* CloudFlare DNS reddirected 2 subdomains for same machine
    * webservice1.iampedrovieira.pt -> 1.1.1.1
    * webservice2.iampedrovieira.pt -> 1.1.1.1

* Nginx reddirect each flow to each container like:
    * webservice1.iampedrovieira.pt ->1.1.1.1:81
    * webservice1.iampedrovieira.pt ->1.1.1.1:82

* Apps are running in docker container in diferent ports

### Expected result

#### webservice1.iampedrovieira.pt
    {"Docker Project":"1","Nginx Proxy":"True","CloudFlare DNS":"True","Docker-Compose":"True","Description":"2 subdomains redirected to same machine but for 2 diferent containers","Container 1":"webserive1.iampedrovieira.pt"
#### webservice2.iampedrovieira.pt
    {"Docker Project":"1","Nginx Proxy":"True","CloudFlare DNS":"True","Docker-Compose":"True","Description":"2 subdomains redirected to same machine but for 2 diferent containers","Container 2":"webserive2.iampedrovieira.pt"