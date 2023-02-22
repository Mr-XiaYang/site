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

### 提示

> [!NOTE]
> An alert of type 'note' using global style 'callout'.

> [!TIP]
> An alert of type 'tip' using global style 'callout'.

> [!WARNING]
> An alert of type 'warning' using global style 'callout'.

> [!ATTENTION]
> An alert of type 'attention' using global style 'callout'.

```markdown
> [!NOTE]
> An alert of type 'note' using global style 'callout'.

> [!TIP]
> An alert of type 'tip' using global style 'callout'.

> [!WARNING]
> An alert of type 'warning' using global style 'callout'.

> [!ATTENTION]
> An alert of type 'attention' using global style 'callout'.
```

#### parameter 

> [!TIP|style:flat|label:custom|iconVisibility:visible]
> An alert of type 'tip' using alert specific style 'flat' which overrides global style 'callout'.
> In addition, this alert uses an own heading and hides specific icon.

| key              | Allowed value                                           |
|------------------|---------------------------------------------------------|
| style            | One of follwowing values: callout, flat                 |
| label            | Any text                                                |
| icon             | A valid Font Awesome icon, e.g. 'fas fa-comment'        |
| className        | A name of a CSS class which specifies the look and feel |
| labelVisibility  | One of follwowing values: visible (default), hidden     |
| iconVisibility	  | One of follwowing values: visible (default), hidden     |