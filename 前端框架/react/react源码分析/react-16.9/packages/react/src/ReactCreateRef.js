/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import type {RefObject} from 'shared/ReactTypes';

// an immutable object with a single mutable value
// 返回一个具有单个可变值的不可变对象 __DEV__ 里的东西我们可以不必关注
export function createRef(): RefObject {
  const refObject = {
    current: null, // 用来接收具体节点
  };
  if (__DEV__) {
    Object.seal(refObject); // 一个不可变对象 目测实际dom上的 ref = { current: null } 会做 current 指向对应节点的操作
  }
  return refObject;
}

