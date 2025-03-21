import { describe, it, expect } from 'vitest';
import messageHandler from '../src/messageHandler';

describe('validateMessage', () => {
    describe('送信できるメッセージかどうか検証できる', () => {
        it('空のメッセージを渡すとfalseを返す', () => {
            const data = { username: 'test', message: '' };
            expect(messageHandler.validateMessage(data)).toBe(false);
        });

        it('空のユーザー名を渡すとfalseを返す', () => {
            const data = { username: '', message: 'hello' };
            expect(messageHandler.validateMessage(data)).toBe(false);
        });

        it('ユーザー名のみ渡すとfalseを返す', () => {
            const data = { username: 'test' };
            expect(messageHandler.validateMessage(data)).toBe(false);
        });

        it('文字列helloを渡すとtrueを返す', () => {
            const data = { username: 'test', message: 'hello' };
            expect(messageHandler.validateMessage(data)).toBe(true);
        });
    });
});

describe('formatMessage', () => {
    describe('メッセージ文字列の前後空白を削除できる', () => {
        it('testとhelloを渡すとそのままtestとhelloを返す', () => {  // 変更項目
            const data = { username: 'test', message: 'hello' };  // 変更項目
            const result = messageHandler.formatMessage(data);

            expect(result).toEqual({
                username: 'test',  // 追加項目
                message: 'hello',
                timestamp: expect.any(String)
            });
        });

        it('_test_と_hello_を渡すと空白を削除してtestとhelloを返す', () => {  // 変更項目
            const data = { username: ' test ', message: ' hello ' };  // 変更項目
            const result = messageHandler.formatMessage(data);

            expect(result).toEqual({
                username: 'test',    // 追加項目
                message: 'hello',
                timestamp: expect.any(String)
            });
        });
    });
});