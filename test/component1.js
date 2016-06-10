import component from '../src/components/component1';
import test from 'tape';

test('should return object', assert => {
    assert.ok(component.code === 'camp');
    assert.end();
});