# docsify

### 忽略副标题

使用`<!-- {docsify-ignore} -->`忽略一个特定的标题, 例:

```markdown
    # Header <!-- {docsify-ignore} -->
```

使用`<!-- {docsify-ignore-all} -->`忽略页面上所有标题, 例：

```markdown
    # Header <!-- {docsify-ignore} -->
```

### 自定义封面背景

```markdown
// 设置背景颜色
![color](#f0f0f0)
// 设置背景图片
![](_media/bg.png)
```

### 禁止图像缩放

```markdown
![](image.png ':no-zoom')
```

### 内联文件

```markdown
[filename](filename.md ":include")
```
