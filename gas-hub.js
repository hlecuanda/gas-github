const observer = new MutationObserver(() => {
  $('.github-alert').remove();
  observer.disconnect();
});
      .catch((err) => { showAlert(err.message, LEVEL_ERROR) });
  const files = $('.item').toArray().map((e) => {
    const match = e.innerText.match(/(.*?)\.(gs|html)$/);
    if (!match || !match[1] || !match[2]) return;
    return match[1];
  });
    let fileStack = [];
      if (files.indexOf(initData[i]) >= 0) fileStack.push(initData[i]);
        fileIds[fileStack.pop()] = initData[i];
    };
    return files;
    const match = e.innerText.match(/(.*?)\.(gs|html)$/);
    if (!match || !match[1] || !match[2]) return;
      name: match[1], 
      type: match[2]
        if (!response.startsWith('//OK'))  reject(new Error('get apps script code failed'));
  $('.d2h-file-name-wrapper').each((i, e) => {
    const filename = $(e).children('.d2h-file-name').text();
    $(e).prepend(`<span><input type="checkbox" class="diff-file" checked="true" value="${filename}" style="margin-right: 10px;"></span>`);
  });
  const promises = $('.diff-file:checked').toArray().map((elem) => {
    const file = elem.value;
  const promises = $('.diff-file:checked').toArray().map((elem) => {
    const file = elem.value;
    const payload = {
      content: code.gas[file],
      encoding: "utf-8"
    };
    return $.ajax({
    })
    .then((response) => {
      return {file: file, blob: response};
    })
  });

  Promise.all([
    Promise.all(promises),
    const tree = responses[0].map((data) => {
      return {
        path: data.file,
        sha: data.blob.sha
      }
    });
    const payload = {
      base_tree: responses[1].commit.commit.tree.sha,
      tree: tree
          context.fileIds[file] = responseData[i];
    observer.observe(document.getElementById('docs-butterbar-container'), { childList: true });