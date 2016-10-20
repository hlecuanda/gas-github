const observer = new MutationObserver((e) => {
  $('.github-alert').remove();  
    const ids = initData.filter((data) => { return /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(data) });
    context.projectId = initData[initData.indexOf(ids[0]) + 1];
    if (context.projectId.length != 33) {
      reject(new Error('cant not get project ID'));
    }
    const promises = ids.map((id) => {
      return new Promise((resolve, reject) => {
        const payload = `7|1|8|https://script.google.com/macros/d/${context.projectId}/gwt/\|${context.gasToken}|_|getFileContent|j|${id}|${context.projectId}|k|1|2|3|4|1|5|5|6|7|8|0|0|`;
        $.ajax({
          url: context.gasUrl,
          headers: context.gasHeaders,
          method: 'POST',
          crossDomain: true,
          data: payload,
          dataType: 'text'
        })
        .then((response) => {
          if (!response.startsWith('//OK'))  reject(new Error('get apps script code failed'));
          //evil eval, but it's simple to get the object since it's not valid json object
          const codeContent = eval(response.slice(4)).filter((e) => {
            return typeof(e) === 'object';
          })[0];
          resolve({file : codeContent[codeContent.length - 6], content: codeContent[codeContent.length - 10], id : id });
        })
        .fail(reject);
    });
    return Promise.all(promises);
  })
  .then((responses) => {
    context.fileIds = responses.reduce((hash, elem) => {
      if (elem) hash[elem.file] = elem.id;
      return hash;
    }, {});
    return responses;
}
function prepareCode(gasFiles) {
  return new Promise((resolve, reject) => {
    .then(resolve)
    .fail(reject);
  })
  .then((response) => {
    return $.getJSON(
      `${baseUrl}/repos/${context.repo.fullName}/git/trees/${response.commit.commit.tree.sha}`,
      { recursive: 1, access_token: accessToken }
    );
  })
  .then((response) => {
    const promises = response.tree.filter((tree) => {
      return tree.type === 'blob' && /(\.gs|\.html)$/.test(tree.path);
    .map((tree) => {
      return new Promise((resolve, reject) => {
        $.getJSON(tree.url, {access_token: accessToken })
        .then((content) => {
          resolve({ file: tree.path, content: decodeURIComponent(escape(atob(content.content)))});
        .fail(reject)
      });
    });
    return Promise.all(promises);
  })
    const files = $('.item').toArray().reduce((hash, e) => {
      const match = e.innerText.match(/(.*?)\.(gs|html)$/);
      if (!match || !match[1] || !match[2]) return hash;
      hash[match[1]] = match[0];
      return hash;
    }, {});
      gas: gasFiles.reduce((hash, elem) => {
        if (elem) hash[files[elem.file]] = elem.content;
      github: data.reduce((hash, elem) => {
  if (promises.length === 0) {
    showAlert("Nothing to do", LEVEL_WARN);
    return;
  }

  if (promises.length === 0) {
    showAlert("Nothing to do", LEVEL_WARN);
    return;
  }
function followPaginate(data) {
  return new Promise((resolve, reject) => {
    $.getJSON(data.url)
    .then((response, status, xhr) => {
      data.items = data.items.concat(response);
      const link = xhr.getResponseHeader('Link');
      let url = null;
      if (link) {
        const match = link.match(/<(.*?)>; rel="next"/);
        url = match && match[1] ? match[1] : null;
      }
      resolve({ items: data.items, url: url });
    })
    .fail(reject);
  });
}

function getAllItems(promise) {
  return promise.then(followPaginate)
  .then((data) => {
    return data.url ? getAllItems(Promise.resolve(data), followPaginate) : data.items;
}

function getGithubRepos() {
  return getAllItems(Promise.resolve({items: [], url: `${baseUrl}/user/repos?access_token=${accessToken}`}))
  new Promise((resolve, reject) => {
    $.ajax({
      url: `${baseUrl}/user/repos`,
      headers: {
        "Authorization": `token ${accessToken}`
      },
      method: 'POST',
      crossDomain: true,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(payload)
    })
    .then(resolve)
    .fail(reject);
  .catch((err) => {
  new Promise((resolve, reject) => {
    $.getJSON(
      `${baseUrl}/repos/${context.repo.fullName}/git/refs/heads/master`,
      { access_token: accessToken }
    )
    .then(resolve)
    .fail(reject)  
  })
  .catch((err) => {
  return getAllItems(Promise.resolve({items: [], url: `${baseUrl}/repos/${context.repo.fullName}/branches?access_token=${accessToken}`}))
  .then((branches) => {
    .then(resolve)
    .fail((err) => {reject(new Error('Create file failed'))})
  })
  .then((response) => {
    if (!response.startsWith('//OK')) reject(new Error(`Create file '${file}.${type}' failed`));
    const responseData = eval(response.slice(4)).filter((e) => {
      return typeof(e) === 'object';
    })[0];
    const id = responseData.filter((data) => { return /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(data) });
    if (id.length > 0) {
      context.fileIds[file] = id[0];
      return id[0];
    } else {
      throw new Error('can not parse response');
    }
    .then((response) => {
    observer.disconnect();
  })