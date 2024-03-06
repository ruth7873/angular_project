export class Course {
    id?: number;
    name?: string;
    categoryId?: number;
    amount?: number;
    beginDate?: Date;
    syllabus?: string[];
    learningType?: LearningType;
    lecturerId?: number;
    image?: string;

    constructor(id: number, name: string = "", categoryId: number, amount: number,
    beginDate: Date=new Date(), syllabus: string[]=[], learningType: LearningType, lecturerId: number, image: string="") {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.amount = amount;
        this.beginDate = beginDate;
        this.syllabus=syllabus;
        this.learningType=learningType;
        this.lecturerId=lecturerId;
        this.image=image;
    }
}
export enum LearningType {
    Frontal = 1,
    zoom = 2
}