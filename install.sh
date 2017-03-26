#!/bin/bash

sudo apt-get update
sudo apt-get install apache2
sudo cp 000-default.conf /etc/apache2/sites-enabled
sudo cp apache2.conf /etc/apache2
sudo a2enmod cgi
sudo service apache2 reload
rm -f 000-default.conf
rm -f apache2.conf

