# blog-recat-symfony

#### This is a simple example ofhow you can use react in symfony project.
___
steps :
```bash
git clone https://github.com/najmi9/blog-recat-symfony.git
cd blog-recat-symfony
composer install
yarn install
php -S localhost:8000 -t public
# before that configure your database credentials
php bin/console doctrine:database:create
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```
___
#### You can check my blog about this project at [react-symfony-blog](nami-imad.com/blog/react-symfony)
#### or contact me on **imadajmi9@gmail.com** for any question.
