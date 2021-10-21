import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "434354235435",
            name: "John",
            qty: '5'
        },
        {
            id: "434324234235435",
            name: "John",
            qty: '5'
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id ===id);
    }
}
