import {Entity, PrimaryGeneratedColumn, Column, Long} from "typeorm";

@Entity()
export class Games {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    active:boolean;

    @Column()
    _uuid: string;

    @Column()
    deals:number;

    @Column()
    entry_fee:number;

    @Column()
    bet_type:string;

    @Column()
    game_sub_type:string;

    @Column()
    number_of_cards:number;

    @Column()
    game_title:string;

    @Column()
    game_type:string;

    @Column()
    number_of_deck:number;

    @Column()
    point_value:number;

    @Column()
    pool_deal_prize:number;

    @Column()
    pool_game_type:number;

    @Column()
    reward_points:number;

    @Column()
    seats:number;

    @Column()
    vip:boolean;

    @Column()
    token:string;

    @Column()
    created_at:string;

    @Column()
    updated_at:string;

    @Column()
    status:number;

}
