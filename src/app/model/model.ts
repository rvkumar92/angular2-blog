export class Blog{
    id: number;
    publishedDate: Date;
    title: string;
    author: string;
    description: string;
    articleBody: string;
    wordCount: number;
    category: string;
}

export class Category{
    id: number;
    category: string;
}