import type buiness from './buiness/model'
import type course from './course/model'

type modelKey = 'buiness' | 'course'

interface ModelConfigTypeAll {
  buiness: typeof buiness
  course: typeof course
}

type ModelConfigType<T extends modelKey> = ModelConfigTypeAll[T]

export type { ModelConfigType, ModelConfigTypeAll }
