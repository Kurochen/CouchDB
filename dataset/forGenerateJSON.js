//Шаблон для генерации JSON для сайта https://json-generator.com/
[
    '{{repeat(100,100)}}',
    {
        book: '{{lorem(1, "sentences")}}',
        author: '{{random("John", "Robert", "David", "Thomas" )}}  {{random("Smith", "Robinson","Jason", "Scott",  )}}',
    }
]
