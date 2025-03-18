import { describe, it, expect } from 'vitest';
import messageHandler from '../src/messageHandler';


describe('validateMessage', () => {
  describe('送信できるメッセージかどうか検証できる', () => {
    it('空文字を渡すとfalseを返す', () => {
      const data = { message: '' };
      expect(messageHandler.validateMessage(data)).toBe(false);
    });

    it('文字列helloを渡すとtrueを返す', () => {
      const data = { message: 'hello' };
      expect(messageHandler.validateMessage(data)).toBe(true);
    });
  });
});

describe('formatMessage', () => {
  describe('メッセージ文字列の前後空白を削除できる', () => {
    it('helloを渡すとそのままhelloを返す', () => {
      const data = { message: 'hello' };
      const result = messageHandler.formatMessage(data);

      expect(result).toEqual({
        message: 'hello',
        timestamp: expect.any(String)
      });
    });

    it('_hello_を渡すと空白を削除してhelloを返す', () => {
      const data = { message: ' hello ' };
      const result = messageHandler.formatMessage(data);

      expect(result).toEqual({
        message: 'hello',
        timestamp: expect.any(String)
      });
    });
  });
});