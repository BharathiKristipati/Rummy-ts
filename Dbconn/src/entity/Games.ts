import {Entity, PrimaryGeneratedColumn, Column, Long} from "typeorm";

@Entity()
export class Games {

    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    active:Boolean;

    @Column()
    _uuid: string;

    @Column()
    deals:Number;

    @Column()
    entry_fee:Number;

    @Column()
    bet_type:String;

    @Column()
    game_sub_type:String;

    @Column()
    number_of_cards:Number;

    @Column()
    game_title:String;

    @Column()
    game_type:String;

    @Column()
    number_of_deck:Number;

    @Column()
    point_value:Number;

    @Column()
    pool_deal_prize:Number;

    @Column()
    pool_game_type:Number;

    @Column()
    reward_points:Number;

    @Column()
    seats:Number;

    @Column()
    vip:Boolean;

    @Column()
    token:String;

    @Column()
    created_at:String;

    @Column()
    updated_at:String;

    @Column()
    status:Number;

}
