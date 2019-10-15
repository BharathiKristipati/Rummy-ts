import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Games {

    @PrimaryGeneratedColumn()
    _uuid: string;

    @Column()
    deals: string;

    @Column()
    game_type: string;

    @Column()
    number_of_cards: number;

}
