import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const blosposts = [
            {
            id: 1,
            publishedDate: new Date(),
            title: 'Blog Post One',
            author: 'rvkumar',
            description: '',
            articleBody: 'sfsdfsdfsdfsfsdf',
            category: 'Science',
            word_count: 0
            },
            {
            id: 2,
            publishedDate: new Date(),
            title: 'Blog Post two',
            author: 'rvkumar',
            description: '',
            category: 'Technical',
            article_body: '',
            word_count: 0
            }
        ];

    const categories = [
        {
            id: 1,
            category: 'Technical'
        },
        {
            id: 2,
            category: 'Science'
        },
        {
            id: 3,
            category: 'Finance'
        }
    ];
        return { blosposts, categories }; 
    }
}