class MyHashMap:

    def __init__(self):
        self.array = []

    def put(self, key: int, value: int) -> None:
        for item in self.array:
            if item[0] == key:
                item[1] = value
                return
        self.array.append([key, value])

    def get(self, key: int) -> int:
        for item in self.array:
            if item[0] == key:
                return item[1]
        return -1

    def remove(self, key: int) -> None:
        for i in range(len(self.array)):
            if self.array[i][0] == key:
                self.array.pop(i)
                break
