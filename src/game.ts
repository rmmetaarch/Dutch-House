
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const dutchHouse = new Entity('dutchHouse')
engine.addEntity(dutchHouse)
dutchHouse.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dutchHouse.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("0441e363-dec6-4854-a76a-63ed1f14febc/Dutch House.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
dutchHouse.addComponentOrReplace(gltfShape2)

const greenSycamoreTree = new Entity('greenSycamoreTree')
engine.addEntity(greenSycamoreTree)
greenSycamoreTree.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(14, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.7989606857299805, 0.8992254734039307)
})
greenSycamoreTree.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("fd4168d3-1040-458d-b90e-fe5f441d593b/TreeSycamore_03/TreeSycamore_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
greenSycamoreTree.addComponentOrReplace(gltfShape3)
